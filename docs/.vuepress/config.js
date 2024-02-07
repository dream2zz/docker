module.exports = {
  lang: "zh-CN",
  title: "Docker 指南",
  themeConfig: {
    lastUpdated: "最后更新时间",
    smoothScroll: true,
    nav: [
      {
        text: "Docker 入门",
        link: "/01_overview/"
      },
      {
        text: "Docker 安装文件",
        link: "/00_inspection_data/"
      },
      {
        text: "Gogs",
        link: "http://gogs.gsafety.com/CloudNativeTechs/docker.git"
      }
    ],
    sidebar: [
      {
        title: "概述",
        children: [
          {
            title: "概述",
            path: "/01_overview/"
          }
        ]
      },
      {
        title: "安装",
        children: [
          {
            title: "使用快捷脚本安装",
            path: "/02_get_docker/2-0-GetDocker"
          },
          {
            title: "Windows下安装",
            path: "/02_get_docker/2-1-Windows"
          },
          {
            title: "CentOS下安装",
            path: "/02_get_docker/2-2-CentOS"
          },
          {
            title: "Ubuntu下安装",
            path: "/02_get_docker/2-3-Ubuntu"
          }
        ]
      },
      {
        title: "开始",
        children: [
          {
            title: "入门",
            path: "/03_get_start/3-0-GetStart"
          },
          {
            title: "容器",
            path: "/03_get_start/3-1-Container"
          },
          {
            title: "镜像",
            path: "/03_get_start/3-2-Images"
          },
          {
            title: "服务",
            path: "/03_get_start/3-3-Service"
          },
          {
            title: "集群",
            path: "/03_get_start/3-4-Swarm"
          },
          {
            title: "应用栈",
            path: "/03_get_start/3-5-ApplicationStack"
          },
          {
            title: "部署应用",
            path: "/03_get_start/3-6-Deployment"
          }
        ]
      },
      {
        title: "开发",
        children: [
          {
            title: "使用Dockerfile的最佳实践",
            path: "/04_develop/4-1-Dockerfile"
          },
          {
            title: "使用多阶段构建",
            path: "/04_develop/4-2-MultiStage"
          },
          {
            title: "使用volume数据挂载",
            path: "/04_develop/4-3-Volume"
          },
          {
            title: "容器开发最佳实践",
            path: "/04_develop/4-4-BestPractices"
          },
          {
            title: "Docker中的Node.js容器化",
            path: "/04_develop/4-5-Containerization-Node.js-APP"
          },
          {
            title: "Docker中的Java容器化",
            path: "/04_develop/4-6-Containerization-Java-APP"
          }
        ]
      }
    ]
  },
  plugins: {
    "@vuepress/plugin-last-updated": true,
    "@vuepress/plugin-back-to-top": true
  }
};