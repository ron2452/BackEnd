const mongoose = require("mongoose");
class ContenedorMongo {
  constructor(collection, schema) {
    this.collection = mongoose.model(collection, schema);
  }

  async save(elem) {
    try {
      let elementos = await this.getAll()
      let newId;
      if (elementos.length == 0) {
        newId = 1;
      } else {
        newId = elementos[elementos.length - 1].id + 1;
      }
      const newElem = { ...elem, id: newId };
      const prodm = await this.collection(newElem);
      await prodm.save();
      return await this.getAll()
    } catch (error) {
      return error;
    }
  }

  async getAll() {
    try {
      let contenido = await this.collection.find();
      return contenido;
    } catch (error) {
      return error;
    }
  }

  async getById(id) {
    try {
      let elem = await this.collection.find({ id: id });
      if (elem[0]) {
        return elem[0]
      } else { return { error: `Producto ${id} no encontrado` } }
    } catch (error) {
      return error;
    }
  }

  async update(elem, id) {
    try {
      await this.collection.updateOne({ id: id }, elem)
      return await this.getById(id);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async deleteById(id) {
    try {
      await this.collection.deleteOne({ id: id });
      return await this.getAll()
    } catch (error) {
      return error;
    }
  }

  async deleteAll() {
    try {
      await this.collection.deleteMany();
      return await this.getAll()
    } catch (error) {
      return error;
    }
  }
}

module.exports = ContenedorMongo;
