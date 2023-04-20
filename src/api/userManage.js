import request from '@/utils/request'

export default{
  getUserList(searchModel){
    return request({
      url: '/user/list',
      method: 'get',
      params:{
        pageNo: searchModel.pageNo,
        pageSize: searchModel.pageSize,
        username: searchModel.username,
        phone: searchModel.phone
      }
    });
  },
  addUser(user){
    return request({
      url: '/user/listinsert',
      method: 'post',
      data: user
    });
  },
  updateUser(user){
    return request({
      url: '/user/listupdate',
      method: 'put',
      data: user
    });
  },
  saveUser(user){
    if(user.id == null && user.id == undefined) {
      console.log(user)
      return this.addUser(user);
    }
    return this.updateUser(user);
  },
  getUserById(id){
    return request({
      // url: '/user/' + id,
      url: `/user/listbyid/${id}`,
      method: 'get'
    })
  },
  deleteUserById(id) {
    return request({
      url: `/user/listdelete`,
      method: 'delete',
      params: { id: id }
    });
  },
}
