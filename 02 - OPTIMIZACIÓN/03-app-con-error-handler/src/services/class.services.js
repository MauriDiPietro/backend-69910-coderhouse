export default class Services {
  constructor(dao) {
    this.dao = dao;
  }

  getAll = async () => {
    // try {
    //   const items = await this.dao.getAll();
    //   return items;
    // } catch (error) {
    //   throw new Error(error);
    // }
    console.log('SE LANZA EL ERROR DESDE SERVICE');
    throw new Error('ERROR SERVICE')
    
  };

  getById = async (id) => {
    try {
      const item = await this.dao.getById(id);
      if (!item) return false;
      else return item;
    } catch (error) {
      throw new Error(error);
    }
  };

  create = async (obj) => {
    try {
      const newItem = await this.dao.create(obj);
      if (!newItem) return false;
      else return newItem;
    } catch (error) {
      throw new Error(error);
    }
  };

  update = async (id, obj) => {
    try {
      let item = await this.dao.getById(id);
      if (!item) {
        return false;
      } else {
        const itemUpdated = await this.dao.update(id, obj);
        return itemUpdated;
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  delete = async (id) => {
    try {
      const itemDeleted = await this.dao.delete(id);
      return itemDeleted;
    } catch (error) {
      throw new Error(error);
    }
  };
}


