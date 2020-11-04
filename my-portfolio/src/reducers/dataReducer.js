const init = {
    about_box : [
        {title: "간단한 자기소개", desc : ""},
        {title: "개발자가 되고 싶은 계기", desc : ""},
        {title: "앞으로의 목표", desc : ""}
    ],
    skills : [
        {content: "Language", skill: [{name: "Java", value: "70%"}, {name: "JavaScript", value: "55%"}, {name: "Python", value: "30%"}]},
        {content: "Front-End", skill: [{name: "Html", value: "70%"}, {name: "CSS", value: "70%"}, {name: "jQuery", value: "50%"}, {name: "React", value: "50%"}]},
        {content: "Back-End", skill: [{name: "Spring", value: "70%"}, {name: "Node.js", value: "50%"}, {name: "My-SQL", value: "50%"}]},
        {content: "ETC", skill: [{name: "AWS S3", value: "30%"}, {name: "HADOOP", value: "30%"}]}
    ]
}
function memberReducer(state = init, action){
    return state
}

export default memberReducer