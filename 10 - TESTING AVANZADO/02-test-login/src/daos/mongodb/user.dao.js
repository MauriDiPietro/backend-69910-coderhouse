import MongoDao from "./mongo.dao.js";
import { UserModel } from "./models/user.model.js";

export default class UserDaoMongo extends MongoDao {
  constructor() {
    super(UserModel);
  }

  getByEmail = async (email) => {
    try {
      return await this.model.findOne({ email });
    } catch (error) {
      throw new Error(error);
    }
  };

  getUserById = async (id) => {
    try {
      return await this.model.findById(id).populate("cart");
    } catch (error) {
      throw new Error(error);
    }
  };
}
