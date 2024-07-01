import { IUser } from "@core/models/user.model"

export interface IResponseComment {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export interface IComment extends IResponseComment {
  user?: IUser
}
