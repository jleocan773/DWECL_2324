import { MongoClient, ServerApiVersion } from "mongodb";

const uri =
	"mongodb+srv://jleocan773:K2eXak6I0DU9WIq2@cluster0.jmw3avr.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});

async function run() {
	try {
		await client.connect();
		await client.db("admin").command({ ping: 1 });
		console.log(
			"Pinged your deployment. You successfully connected to MongoDB!"
		);

		const database = client.db("Tema14");
		const coleccion = database.collection("Tarea2");
	} finally {
		await client.close();
	}
}
run().catch(console.dir);
