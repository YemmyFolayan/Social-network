import {getSidebar, getPosts} from './queries';

export default {
  Query: {},
  Mutation: {
    toggleSidebarState: (_, args, {cache}) => {
      const data = cache.readQuery({query: getSidebar});
      data.sidebar.isOpen = !data.sidebar.isOpen;
      cache.writeData({data});
      return null;
    },
    addPostState: (_, {post}, {cache}) => {
      const data = cache.readQuery({query: getPosts});
      data.posts.unshift(post);
      cache.writeData({data});
      return null;
    },
    removePostState: (_, args, {cache}) => {
      const data = cache.readQuery({query: getPosts});
      data.posts = data.posts.filter(({id}) => id !== args.id)
      cache.writeData({data});
      return null;
    },
  }
}