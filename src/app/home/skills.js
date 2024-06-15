"use client";
import React from "react";

const Skills = () => {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-md font-bold mt-20">Data Analytics</h1>
      <div className="flex flex-row justify-center mt-10 w-full items-center p-10 bg-gray-800 text-white rounded-3xl gap-20">
        <div className="flex flex-col items-center justify-center">
          <img src="/python.png" alt="Python" className="h-10" />
          <p className="text-lg  mt-3">Python</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="./sql.png" alt="SQL" className="w-30 h-10" />
          <p className="text-lg mt-3">SQL</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="./tableau.png" alt="Tableau" className="h-10" />
          <p className="text-lg mt-3">Tableau</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="./powerbi.png" alt="PowerBI" className="h-10" />
          <p className="text-lg mt-3">PowerBI</p>
        </div>
      </div>
      <h1 className="text-md font-bold mt-20">Web Development</h1>
      <div className="flex flex-row justify-center mt-10 w-full items-center p-8 bg-gray-300 text-black rounded-3xl gap-20">
        <div className="flex flex-col items-center justify-center">
          <img src="./react.png" alt="React" className="h-10" />
          <p className="text-lg mt-3">React</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="./nextjs.png" alt="NextJS" className="h-10" />
          <p className="text-lg mt-3">NextJS</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="./nodejs.png" alt="NodeJS" className="h-10" />
          <p className="text-lg mt-3">NodeJS</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="./tailwindcss.png" alt="TailwindCSS" className="h-10" />
          <p className="text-lg mt-3">TailwindCSS</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="./bootstrap.png" alt="Bootstrap" className="h-10" />
          <p className="text-lg mt-3">Bootstrap</p>
        </div>
      </div>
      <h1 className="text-md font-bold mt-20">DevOps</h1>
      <div className="flex flex-row justify-center mt-10 w-full items-center p-8 bg-gray-800 text-white rounded-3xl gap-20">
        <div className="flex flex-col items-center justify-center">
          <img src="./docker.png" alt="Docker" className="h-10" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="./kubernetes.png" alt="Kubernetes" className="h-20" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="./jenkins.png" alt="Jenkins" className="h-10" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src="./githubactions.png"
            alt="GitHub Actions"
            className="h-10"
          />
          <p className="text-sm">GitHub Actions</p>
        </div>
      </div>
      <h1 className="text-md font-bold mt-8">Databases and Services</h1>
      <div className="flex flex-row justify-center mt-10 w-full items-center p-8 bg-gray-300 text-black rounded-3xl gap-20">
        <div className="flex flex-col items-center justify-center">
          <img src="./mongodb.png" alt="MongoDB" className="h-10" />
          <p className="text-lg mt-3">MongoDB</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src="./mysqlworkbench.png"
            alt="MySQL Workbench"
            className="h-10"
          />
          <p className="text-lg mt-3">MySQL Workbench</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="./mssqlserver.png" alt="MSSQL Server" className="h-10" />
          <p className="text-lg mt-3">MSSQL Server</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="./oracleapex.png" alt="Oracle Apex" className="h-10" />
          <p className="text-lg mt-3">Oracle Apex</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="./firebase.png" alt="Firebase" className="h-10" />
          <p className="text-lg mt-3">Firebase</p>
        </div>
      </div>
      <h1 className="text-md font-bold mt-8">Programming Languages</h1>
      <div className="flex flex-row justify-center mt-10 w-full items-center p-8 bg-gray-800 text-white rounded-3xl gap-20">
        <div className="flex flex-col items-center justify-center">
          <img src="./csharp.svg" alt="Csharp" className="h-10" />
          <p className="text-lg">C#</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="./cplusplus.png" alt="C++" className="h-10" />
          <p className="text-lg">C++</p>
        </div>
      </div>
      <h1 className="text-md font-bold mt-8">
        Deployment Platforms I have worked with
      </h1>
      <div className="flex flex-row justify-center mt-10 w-full items-center p-8 bg-gray-300 text-black rounded-3xl gap-20">
        <div className="flex flex-col items-center justify-center">
          <img src="./aws.png" alt="AWS" className="h-10" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="./gcp.png" alt="GCP" className="h-20" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="./vercel.png" alt="Vercel" className="h-10" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="./hostinger.png" alt="Hostinger" className="h-10" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="./cyclic.png" alt="Cyclic" className="h-10" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
