export class Responses {
  omg: string;

  public _400(data): any {
    return {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Origin": "*"
      },
      statusCode: 400,
      body: JSON.stringify(data)
    };
  }

  public _200(data): any {
    return {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Origin": "*"
      },
      statusCode: 200,
      body: JSON.stringify(data)
    };
  }
}
