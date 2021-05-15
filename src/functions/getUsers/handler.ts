import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

const getUsers: ValidatedEventAPIGatewayProxyEvent<any> = async (event) => {
  return formatJSONResponse({
    users:'Sudarsan',
    event,
  });
}

export const main = middyfy(getUsers);
