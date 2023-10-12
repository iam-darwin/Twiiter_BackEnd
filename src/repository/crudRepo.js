export default class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      console.log("Error in crud");
      throw { error };
    }
  }

  async getAll() {
    try {
      const response = await this.model.find({});
      return response;
    } catch (error) {
      console.log("Error in crud");
      throw { error };
    }
  }

  async getId(id) {
    try {
      const response = await this.model.findById(id);
      return response;
    } catch (error) {
      console.log("Error in crud");
      throw { error };
    }
  }

  async delete(id) {
    try {
      await this.model.findByIdAndDelete(id); // Use findByIdAndDelete to delete by ID
      return true;
    } catch (error) {
      console.log("Error in crud");
      throw { error };
    }
  }
}
