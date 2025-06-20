const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot06idu/",
            name: "springboot06idu",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot06idu/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "招生管理系统"
        } 
    }
}
export default base
