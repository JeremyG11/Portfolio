import { mongoConnect } from "./dbConfig";
import { ReviewsModel} from "../../models"

const getReviews = async ()=>{
    const reviews = await ReviewsModel.find({})
}