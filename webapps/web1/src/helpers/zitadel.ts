import { Profile } from 'next-auth';

type ProjectId = string;
type RoleId = string;
type OrgId = string;

function tokenRoles(acc: Record<RoleId, Array<OrgId>>, [key, value]: [RoleId, Record<OrgId, string>]) {
  acc[key] = Object.keys(value);
  return acc;
}

type Config = {
  roles?: string[];
  orgId?: OrgId;
  projectId?: ProjectId;
  metadata?: boolean;
};

export function makeZitadelAuth(args: Config) {
  const scopes = args.roles || ['openid', 'email', 'profile'];

  if (args.projectId) {
    scopes.push(
      `urn:zitadel:iam:org:project:id:${args.projectId}:aud`,
      'urn:zitadel:iam:org:projects:roles',
      'urn:zitadel:iam:org:project:roles',
    );
  }

  if (args.orgId) {
    scopes.push(
      'urn:zitadel:iam:org:project:id:zitadel:aud',
      'urn:zitadel:iam:user:resourceowner',
      `urn:zitadel:iam:org:id:${args.orgId}`,
    );
  }

  if (args.metadata) {
    scopes.push('urn:zitadel:iam:user:metadata');
  }

  return {
    profileToken(profile: Profile) {
      return profileToken(args, profile);
    },
    scope: scopes.join(' '),
  };
}

type Metadata = Record<string, string>;

type ZitadelProfileToken = {
  org?: {
    id?: string;
  };
  user?: ProfileUser;
  project?: Record<
    string,
    {
      roles: Record<string, string[]>;
    }
  >;
};

type ProfileUser = {
  metadata?: Metadata;
  resourceOwner?: {
    id: string;
    name: string;
    primaryDomain: string;
  };
};

type ProfileToken = {
  sub: string;
  zitadel: ZitadelProfileToken;
};

function profileTokenUser(cfg: Config, profile: Profile): ProfileUser {
  const user: ProfileUser = {};
  if (cfg.metadata) {
    user.metadata = profile['urn:zitadel:iam:user:metadata'] as Metadata;
  }
  if (cfg.orgId) {
    user.resourceOwner = {
      id: profile['urn:zitadel:iam:user:resourceowner:id'] as string,
      name: profile['urn:zitadel:iam:user:resourceowner:name'] as string,
      primaryDomain: profile['urn:zitadel:iam:user:resourceowner:primary_domain'] as string,
    };
  }
  return user;
}

function profileToken(cfg: Config, profile: Profile): ProfileToken {
  const zitadel: ZitadelProfileToken = {};

  if (cfg.orgId || cfg.metadata) {
    zitadel.user = profileTokenUser(cfg, profile);
  }

  if (cfg.orgId) {
    zitadel.org = { id: profile['urn:zitadel:iam:org:id'] as string };
  }

  if (cfg.projectId) {
    const roles = Object.entries(profile[`urn:zitadel:iam:org:project:${cfg.projectId}:roles`] || {}).reduce(
      tokenRoles,
      {},
    );
    zitadel.project = { [cfg.projectId]: { roles: roles } };
  }

  return {
    sub: profile.sub!,
    zitadel,
  };
}
