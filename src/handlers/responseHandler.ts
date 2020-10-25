export default async ({ request, response }: { request: any, response: any }, next: any) => {
  try {
    console.log('Response Handler');
    await next();
  } catch (error) {
    response.body = error;
  }
};
