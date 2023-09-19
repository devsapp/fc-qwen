import { NextRequest, NextResponse } from "next/server";
import type { NextApiRequest } from 'next'
import { getServerSideConfig } from "../../config/server";
// import { DEFAULT_WATER_MASK } from '../../constant'
const serverConfig = getServerSideConfig();

// Danger! Don not write any secret value here!
// 警告！不要在这里写入任何敏感信息！
const DANGER_CONFIG = {
  needCode: serverConfig.needCode,
  hideUserApiKey: serverConfig.hideUserApiKey,
  disableGPT4: serverConfig.disableGPT4,
  hideBalanceQuery: serverConfig.hideBalanceQuery,
};

declare global {
  type DangerConfig = typeof DANGER_CONFIG;
}

function handle(req: NextRequest) {

  const { headers } = req;
  const uid: any = headers.get('x-fc-account-id') || '\n';
  return NextResponse.json(Object.assign({}, DANGER_CONFIG, { uid }));
}

export const GET = handle;
export const POST = handle;

export const runtime = "edge";
