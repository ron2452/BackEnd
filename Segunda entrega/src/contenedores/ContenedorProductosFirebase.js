var firebase = require("firebase-admin");

class ContenedorFirebase {
    constructor(collection) {
        this.collection = firebase.firestore().collection(collection)
    }

    async save(elem) {
        try {
            let elems = await this.getAll()
            let newId;
            if (elems.length == 0) {
                newId = 1;
            } else {
                newId = elems[elems.length - 1].id + 1;
            }
            const newElem = { ...elem, timestamp: Date.now(), id: newId };
            await this.collection.doc(`${newId}`).set(newElem);
            return await this.getAll()
        } catch (error) {
            return error;
        }
    }

    async getAll() {
        try {
            const result = [];
            const snapshot = await this.collection.get();
            snapshot.forEach((doc) => {
                result.push({ id: doc.id, ...doc.data() });
            });
            return result;
        } catch (error) {
            return error;
        }
    }

    async getById(id) {
        try {
            const doc = await this.collection.doc(id).get();
            const data = doc.data();
            if (data) return data
            else return { error: `producto ${id} no encontrado` }
        } catch (error) {
            return error;
        }
    }

    async update(elem, id) {
        try {
            const newElem = { ...elem, timestamp: Date.now() }
            await this.collection.doc(id).update(newElem)
            return await this.getById(id);
        } catch (error) {
            return error;
        }
    }

    async deleteById(id) {
        try {
            const data = await this.getById(id)
            if (data.id) {
                await this.collection.doc(id).delete()
                return await this.getAll();
            } else return data
        } catch (error) {
            return error;
        }
    }

    async deleteAll() {
        try {
            const snapshot = await this.collection.get();
            snapshot.forEach((doc) => {
                this.collection.doc(doc.id).delete()
            });
            return await this.getAll();
        } catch (error) {
            return error;
        }
    }
}

module.exports = ContenedorFirebase;
