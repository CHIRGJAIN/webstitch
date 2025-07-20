import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: {
    name: string
    avatar: string
  }
  publishedAt: string
  updatedAt: string
  tags: string[]
  category: string
  featured: boolean
  image: string
  readTime: number
}

interface BlogState {
  posts: BlogPost[]
  currentPost: BlogPost | null
  categories: string[]
  tags: string[]
  isLoading: boolean
  error: string | null
  filters: {
    category: string | null
    tag: string | null
    search: string
  }
}

const initialState: BlogState = {
  posts: [],
  currentPost: null,
  categories: [],
  tags: [],
  isLoading: false,
  error: null,
  filters: {
    category: null,
    tag: null,
    search: '',
  },
}

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setPosts: (state, action: PayloadAction<BlogPost[]>) => {
      state.posts = action.payload
    },
    setCurrentPost: (state, action: PayloadAction<BlogPost | null>) => {
      state.currentPost = action.payload
    },
    setCategories: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload
    },
    setTags: (state, action: PayloadAction<string[]>) => {
      state.tags = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
    setFilters: (state, action: PayloadAction<Partial<BlogState['filters']>>) => {
      state.filters = { ...state.filters, ...action.payload }
    },
    clearFilters: (state) => {
      state.filters = {
        category: null,
        tag: null,
        search: '',
      }
    },
  },
})

export const {
  setLoading,
  setPosts,
  setCurrentPost,
  setCategories,
  setTags,
  setError,
  setFilters,
  clearFilters,
} = blogSlice.actions

export default blogSlice.reducer