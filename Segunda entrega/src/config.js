const config = {
    DB: 'fs', //It can be 'firenase', 'mongo' or 'fs'

    fileSystem: {
        carritosPath: 'src/data/carritos.json',
        productosPath: 'src/data/productos.json'
    },
    mongo: {
        url: 'mongodb+srv://matias:matias@cluster0.6y6tj.mongodb.net/SegEntPryFin?retryWrites=true&w=majority',
        options: {
            serverSelectionTimeoutMS: 5000
        }
    },
    firebase: {
        collectionNameP: "productos",
        collectionNameC: "carritos",
        type: "service_account",
        project_id: "proyectobackend-dcca5",
        private_key_id: "8b6c9ffa86ef4acdbef1e910dbc21614d70fe42b",
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDHdW8J2j9Qru+4\nMWa8CYGto1ldRYl+FSFG6m2jXWyIOd8kyxoTwRGHOswqzVmMatk9Ju/ydRdNRIPn\n2M15UhaHpxc6T2wLhnTuljBdgcVGXvFUZtiM9dMxckvYqnAFfTGOVE9oSZ6FRfDI\nrOg7F/pWCHOd+9cI61P653C8WSdKHIkEcjvkgiLyps7+MveU/9Kq40EvQfSBYAcS\nTpQq7LFCCswXweFO/D4KQa/Frq9j7inMywMSy0a6BzK9A7GA/SMuDtAOk+yYLYW7\nymXFF/UyDzRWXYrQ7hJngW4U4aiV5kGIt0anMQIAJV7jAYHehxnGaGtExRrPthPe\nv9T8EjrJAgMBAAECggEADlGuDWglgjxy0Xd7c32fuYhX8KgesyZfb5TCFvespFl6\nPW0Ww8sJH/sOv/Ziyr+7dYZLdM2m5PlJmm4AL0jfPPEYC+u6exfVonC2C2p28AK+\nIsPo4TK/LQYyb30p4lz+3yPKmRcq6hCvtOpj2CU0J7O+4B09rmJdkq5Fk8H3PfzO\ns1kmOM3iUmdp0lGeDPuuGyG90XZZ3agW7Xp/0a/0ndcFNUINFWtK0aas/ZmjIjec\ndsfQ9ecBlDf1EV8dJg+6WAqQkao3and/LpSQvInmq3ENwbGOK/FW6oxH9Z4o5DNA\njABegMDKqIpNPfkW3hLIVHg5WA6dXUm1NZI/iJb0wQKBgQDuyUYEJZVMO/kQEIlp\nqKEONBj+78KmOdv99tLnbtWfLQr9IkttpFyP1RbMy3k/nCS6iUpUmJw82nW1ABly\nxjyPzmkUf6+13NZ4Htm5pbc/7zBpER8RzoIHyZF9Pv0DpM69N98yuHEcrsZFoj2l\nRQPxOzyNiNn3dM5HMDWNHjTJQQKBgQDV1mIhC4msZlBBG/TTjtZtamY5xqPKlRT9\njEhM/nwOQ5Fzw2yERvt8uS8ffs2PEzVe5ERcI/vhCC2HNwL81ZH/Zm02njaU8v6L\nZtrncG/Ud9IxmTmcNQR4QzVuSztv6x6CSC7+UVdQidGlojm7mo7zV7Atn0zb4Ila\ny/A42CHHiQKBgG6oYcUcMaMBi/tw3m1Tk0eExyylqbvkxllcIALWbzLz6crDMNdf\nuvGA268OgGMFFlRHuWWYz5a32qKFqEVzLq+qBTJVtfT+oXlLOrT44gJD81hNceuL\nmuDG/aBgJ1qf7prroIjdxrV3HTU56X2EjT4mqHoiuHgf7lQ5OCfsnqPBAoGAGObu\nZorBbaI8llh7Gmf38KYDYZcQW/cgiqZbhRvdtouH1MNdT8o0X0HxiulpZtAF1xce\nHtzR6FLbenOdlXQJnISBE2s5T/88RV+k/m7JlySdBcmiO96wtpCdGEsKkO4Aj4t4\nbYVrdaWXFILf1kkZfJ0plyaF/NUZKcm2H+iLhoECgYEAtxIgTi6Oj18d+sKfz9sU\nHgH7yZqe6rgv4edRz6DGZVB906tTFo0+Q0vURJF+EsFAdVBn7ovQeVmbUrm5bFC6\npkBSB1PHDw66hAjHqmUt93Hov3GlhfHVGT9zdlrL9UKCtfACI7WBnfc3wW/YZFpc\nm2QVPb8ZYwiDHngBjirCAZA=\n-----END PRIVATE KEY-----\n",
        client_email: "firebase-adminsdk-rfk59@proyectobackend-dcca5.iam.gserviceaccount.com",
        client_id: "113099618778239932773",
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
        client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-rfk59%40proyectobackend-dcca5.iam.gserviceaccount.com"
    }
}


module.exports = config