"use client";
import Image from "next/image";
import "./css/home.css";
import { useMediaQuery } from "@react-hook/media-query";

const handleDownload = () => {
    const pdfUrl = "/assets/curriculum.pdf";
    const downloadLink = document.createElement("a");
    downloadLink.href = pdfUrl;
    downloadLink.setAttribute("download", "curriculum.pdf");
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
};

const ProfileImage = ({ isMobile }: { isMobile: boolean }) => {
    return (
        <div
            className={`${
                isMobile
                    ? "w-3/4 h-auto mb-10 flex items-center justify-center mx-auto" 
                    : "w-full h-auto flex items-center justify-center"
            } bg-[#1E1E1E] rounded-xl z-30`}
        >
            <Image
                src="/assets/photo-profile.png"
                width={isMobile ? 200 : 400}
                height={isMobile ? 250 : 500}
                alt="Profile Picture"
                className="object-cover rounded-xl"
            />
        </div>
    );
};


const DownloadButton = () => (
    <button
        onClick={handleDownload}
        className="btnMain z-20 rounded-3xl relative border-4 border-dashed border-[#972DA8] flex items-center overflow-hidden"
    >
    <span className="pl-2 pr-2 pt-3 pb-3 font-mrRobot font-light">
      Download CV
    </span>
        <span className="bg-[#972DA8] flex items-center justify-center rounded-3xl p-2">
      <Image
          src="/assets/download.svg"
          alt="Download currículo"
          width={30}
          height={30}
      />
    </span>
    </button>
);

export default function Home() {
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <main className="bg-[#2A2E35] text-lg text-zinc-300 font-firaCode">
            <div className="min-h-screen overflow-hidden flex flex-col items-center justify-center">
                <div className="grid grid-cols-12 min-h-screen max-md:grid-cols-1 max-md:pb-24 max-md:text-center">
                    {!isMobile && (
                        <div className="flex items-center relative col-span-3">
                            <div className="w-4/6 h-full bg-[#972Da8] absolute left-0 top-0 z-10" style={{ clipPath: "polygon(0 0, 46% 0, 79% 100%, 0% 100%)" }}/>
                            <div className="m-4 relative z-20">
                                <ProfileImage isMobile={false} />
                            </div>
                        </div>
                    )}
                    <div
                        className="flex flex-col justify-center col-span-7 pr-10 max-md:pr-0 max-md:w-11/12 max-md:mx-auto">
                        <div className="2xl:flex 2xl:flex-col 2xl:gap-6">
                            <div className="px-8">
                                <h1 className="text-[#972Da8] text-5xl font-mrRobot max-md:text-4xl max-md:text-center max-md:p-12 2xl:text-6xl">
                                    Hi, I&apos;m{" "}<span className="text-zinc-300">Gustavo <br/>Alfredo.</span><br/>A
                                    Web <br/>Developer.
                                </h1>
                                {isMobile && (
                                    <div className="m-4 relative z-20">
                                        <ProfileImage isMobile={true}/>
                                    </div>
                                )}
                                <p className="text-base py-8 my-4 text-justify max-md:text-center w-full max-md:text-lg 2xl:text-xl">
                                    Sou desenvolvedor web, utilizando TypeScript, React e Vue no
                                    front-end, e Java Spring e NodeJS no back-end. Possuo
                                    habilidade em prototipagem utilizando o Figma, além de
                                    conhecimento na utilização de bancos de dados como PostgreSQL
                                    e MySQL.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center max-md:w-full py-4 px-8">
                            <DownloadButton/>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}
