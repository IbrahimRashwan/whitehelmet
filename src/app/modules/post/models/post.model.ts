import { IUser } from "@core/models/user.model"
import { IComment } from "./comment.model"

export interface IResponsePost {
  userId: number
  id: number
  title: string
  body: string
}

export interface IPost extends IResponsePost {
  user?: IUser,
  comments?: IComment[]
}
