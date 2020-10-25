export default {
  list: async ({ request, response }: { request: any, response: any }) => {
    try {
      console.log('yay');
      response.body = 'yay';
    } catch (error) {
      response.body = error;
    }
  },
};
