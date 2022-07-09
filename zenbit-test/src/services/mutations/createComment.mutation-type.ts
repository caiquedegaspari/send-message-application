interface CreateCommentData {
  name: string
  email: string
  message: string
}

export interface CreateCommentVars {
  createCommentInput: CreateCommentData
}

export interface CreateCommentReturn {
  createComment: CreateCommentData
}
