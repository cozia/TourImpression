//module.exports=function(grunt) {
//    grunt.initConfig({
//        pkg: grunt.file.readJSON("package.json"),
//        uglify: {
//            options: {
//                banner: "/*!<%=pkg.author%><%=grunt.template.today('yyyy-mm-dd')%>*/\n"
//            },
//            build: {
//                files: [{
//                    expand: true,
//                    cwd: '<%=pkg.author%>/',
//                    src: '*.js',
//                    dest: 'dist/js'
//                }]
//            }
//        },
//        watch:{
//            html:{
//                files:["views/**.html"],
//                options:{livereload:true}
//            },
//            css:{
//                files:["styles/**.css"],
//                options:{livereload:true}
//            },
//            js:{
//                files:["scripts/**.js"],
//                options:{livereload:true}
//            }
//        }
//    });
//    grunt.loadNpmTasks("grunt-contrib-uglify");
//    grunt.loadNpmTasks("grunt-contrib-livereload");
//    grunt.registerTask("default",["uglify"]);
//    grunt.registerTask("listener",["livereload"]);
//};
"use strict";
module.exports=function(grunt){
    require("load-grunt-tasks")(grunt);
    require("time-grunt")(grunt);
    var config={
        app:"app",
        dist:"dist"
    };
    grunt.initConfig({
        config:config,
        copy:{
            dist:{
                src:"",
                dest:""
            }
        }
    })
};


