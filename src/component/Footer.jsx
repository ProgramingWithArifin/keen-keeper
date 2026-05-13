import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-primary text-white text-center pt-15 md:pt-18 ">
            <div className="pb-10 space-y-5">
                <h1 className="text-4xl md:text-5xl font-bold">KeenKeeper</h1>
                <p className="text-sm">Your personal shelf of meaningful connections. Browse, trend, and nurture the relationships that matter most.</p>
                <div className="">
                    <h3>Social Links</h3>
                    <div className="flex justify-center gap-2 mt-2">
                        <a><Image src='/instagram.png' alt="instagram" width={'40'} height={'40'}></Image></a>
                        <a><Image src='/facebook.png' alt="instagram" width={'40'} height={'40'}></Image></a>
                        <a><Image src='/twitter.png' alt="instagram" width={'40'} height={'40'}></Image></a>
                    </div>
                </div>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-5 border-t border-white/20 text-sm">
                        <p>© 2026 KeenKeeper. All rights reserved.</p>
                        <div className="flex gap-5 flex-wrap">
                            <span>Privacy Policy</span>
                            <span>Terms of Service</span>
                            <span>Cookies</span>
                        </div>
                    </div>
            </div>
        </footer>
    );
};

export default Footer;