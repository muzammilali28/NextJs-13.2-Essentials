import mongoConnection from "@/config/mongoConnection";
import demoModel from "@/models/demoModel";

const createTodo = async (data) => {

    try {
        
        await mongoConnection();

        const result = await demoModel.create(data);
        console.log(result);

        return{status: "OK", message: "Todo Created Successfully"};

    } catch (error) {
        console.log(error);
        return{status: "ERROR", message: "Something went wrong"}
    }
}

export default createTodo;