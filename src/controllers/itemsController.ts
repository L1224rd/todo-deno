import itemsRepository from '../repositories/itemsRepository.ts';

export default {
  list: async ({ request, response }: { request: any, response: any }) => {
    try {
      const items = await itemsRepository.find();
      response.body = 'items';
    } catch (error) {
      response.body = error;
    }
  },
};
