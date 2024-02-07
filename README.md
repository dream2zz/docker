Docker
===


# [一、概述](/docs/01_overview#概述)

- [平台（Docker platform）](/docs/01_overview#1-%E5%B9%B3%E5%8F%B0docker-platform)
- [引擎 （Docker Engine）](/docs/01_overview#2-%E5%BC%95%E6%93%8E-docker-engine)
- [作用](/docs/01_overview#2-%E5%BC%95%E6%93%8E-docker-engine)
    - [快速，持续地交付应用程序](/docs/01_overview#%E5%BF%AB%E9%80%9F%E6%8C%81%E7%BB%AD%E5%9C%B0%E4%BA%A4%E4%BB%98%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F)
    - [响应式部署和扩展](/docs/01_overview#%E5%93%8D%E5%BA%94%E5%BC%8F%E9%83%A8%E7%BD%B2%E5%92%8C%E6%89%A9%E5%B1%95)
    - [在同一硬件上运行更多工作负载](/docs/01_overview#%E5%9C%A8%E5%90%8C%E4%B8%80%E7%A1%AC%E4%BB%B6%E4%B8%8A%E8%BF%90%E8%A1%8C%E6%9B%B4%E5%A4%9A%E5%B7%A5%E4%BD%9C%E8%B4%9F%E8%BD%BD)
- [架构](/docs/01_overview#4-%E6%9E%B6%E6%9E%84)
    - [守护进程（Docker Daemon）](/docs/01_overview#%E5%AE%88%E6%8A%A4%E8%BF%9B%E7%A8%8Bdocker-daemon)
    - [客户端（Docker Client）](/docs/01_overview#%E5%AE%A2%E6%88%B7%E7%AB%AFdocker-client)
    - [镜像库（Docker Registry）](/docs/01_overview#%E9%95%9C%E5%83%8F%E5%BA%93docker-registry)
    - [对象（Docker Objects）](/docs/01_overview#%E5%AF%B9%E8%B1%A1docker-objects)
- [原理](/docs/01_overview#5-%E5%8E%9F%E7%90%86)
    - [Namespaces](/docs/01_overview#namespaces)
    - [Control groups](/docs/01_overview#control-groups)
    - [Union file systems](/docs/01_overview#union-file-systems)
    - [Container format](/docs/01_overview#container-format)

# [二、安装](/docs/02_get_docker/2-0-GetDocker.md)

- [使用快捷脚本安装](/docs/02_get_docker/2-0-GetDocker.md#%E4%BD%BF%E7%94%A8%E5%BF%AB%E6%8D%B7%E8%84%9A%E6%9C%AC%E5%AE%89%E8%A3%85)

- [Windows](/docs/02_get_docker/2-1-Windows.md)
    - [Windows安装前言](/docs/02_get_docker/2-1-Windows.md#1-windows%E5%AE%89%E8%A3%85%E5%89%8D%E8%A8%80)
    - [安装Desktop for Windows 桌面应用程序](/docs/02_get_docker/2-1-Windows.md#2-%E5%AE%89%E8%A3%85desktop-for-windows-%E6%A1%8C%E9%9D%A2%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F)
    - [启动Desktop for Windows](/docs/02_get_docker/2-1-Windows.md#3-%E5%90%AF%E5%8A%A8desktop-for-windows)

- [CentOS](/docs/02_get_docker/2-2-CentOS.md)
    - [先决条件](/docs/02_get_docker/2-2-CentOS.md#1-%E5%85%88%E5%86%B3%E6%9D%A1%E4%BB%B6)
    - [安装 Docker CE](/docs/02_get_docker/2-2-CentOS.md#2-%E5%AE%89%E8%A3%85-docker-ce)
        - [使用镜像仓库进行安装](/docs/02_get_docker/2-2-CentOS.md#1-%E4%BD%BF%E7%94%A8%E9%95%9C%E5%83%8F%E4%BB%93%E5%BA%93%E8%BF%9B%E8%A1%8C%E5%AE%89%E8%A3%85)
        - [从软件包进行安装](/docs/02_get_docker/2-2-CentOS.md#2-%E4%BB%8E%E8%BD%AF%E4%BB%B6%E5%8C%85%E8%BF%9B%E8%A1%8C%E5%AE%89%E8%A3%85)

- [Ubuntu](/docs/02_get_docker/2-3-Ubuntu.md)
    - [先决条件](/docs/02_get_docker/2-3-Ubuntu.md#1-%E5%85%88%E5%86%B3%E6%9D%A1%E4%BB%B6)
    - [安装 Docker CE](/docs/02_get_docker/2-3-Ubuntu.md#2-%E5%AE%89%E8%A3%85-docker-ce)
        - [使用镜像仓库进行安装](/docs/02_get_docker/2-3-Ubuntu.md#1-%E4%BD%BF%E7%94%A8%E9%95%9C%E5%83%8F%E4%BB%93%E5%BA%93%E8%BF%9B%E8%A1%8C%E5%AE%89%E8%A3%85)
        - [从软件包进行安装](/docs/02_get_docker/2-3-Ubuntu.md#2-%E4%BB%8E%E8%BD%AF%E4%BB%B6%E5%8C%85%E8%BF%9B%E8%A1%8C%E5%AE%89%E8%A3%85)

# [三、入门](/docs/03_get_start/3-0-GetStart.md)

- [容器](/docs/03_get_start/3-1-Container.md)
- [镜像](/docs/03_get_start/3-2-Images.md)
- [服务](/docs/03_get_start/3-3-Service.md)
- [集群](/docs/03_get_start/3-4-Swarm.md)
- [应用栈](/docs/03_get_start/3-5-ApplicationStack.md)
- [部署应用](/docs/03_get_start/3-6-Deployment.md)

# [四、开发](/4-0-Develop.md)

- [使用Dockerfiles的最佳实践](/docs/04_develop/4-1-Dockerfile.md)
- [使用multistage多阶段构建](/docs/04_develop/4-2-MultiStage.md)
- [使用volumes管理容器数据](/docs/04_develop/4-3-Volume.md)
- [容器开发最佳实践](/docs/04_develop/4-4-BestPractices.md)
- [容器化Node.js应用程序](/docs/04_develop/4-5-Containerization-Node.js-APP.md)
- [容器化Java应用程序](/docs/04_develop/4-6-Containerization-Java-APP.md)
