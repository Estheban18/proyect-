import { MongoClient } from 'mongodb';

// URI de conexión con tus credenciales
const uri = "mongodb+srv://1432599_db_user:9X0M9q9sCWG58NJx@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority";
const dbName = "mydatabase"; // Cambia esto por el nombre de tu base de datos

const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();  
    console.log("Conectado a MongoDB Atlas");
    return client.db(dbName);
  } catch (error) {
    console.error("Error al conectar:", error);
    throw error;
  }
}

// Ejemplo de uso
async function main() {
  try {
    const db = await connectToDatabase();
    
    // Ejemplo: insertar un documento
    const collection = db.collection('users');
    await collection.insertOne({
      name: "Juan Pérez",
      email: "juan@example.com",
      createdAt: new Date()
    });
    
    console.log("Documento insertado correctamente");
    
    // Ejemplo: leer documentos
    const users = await collection.find({}).toArray();
    console.log("Usuarios encontrados:", users);
    
  } catch (error) {
    console.error("Error en la operación:", error);
  } finally {
    await client.close();
  }
}

// Ejecutar la función principal
main().catch(console.error);

export { connectToDatabase, client }; 