import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-green-900 text-white py-8 mt-12">
            <div className="container mx-auto px-6 flex flex-col md:flex-row md:justify-between items-center text-center md:text-left">
                <div className="mb-4 md:mb-0">
                    <div className="font-bold text-lg">© {new Date().getFullYear()} Luong Landscaping & Gardening. All rights reserved.</div>
                    <div className="text-sm mt-1">
                        <a href="#" className="hover:underline mr-2">Privacy Policy</a>
                        <a href="#" className="hover:underline">Terms of Service</a>
                    </div>
                </div>
                <div className="flex flex-col items-center md:items-end">
                    <div className="font-semibold">Contact</div>
                    <div className="text-sm">(555) 123-4567</div>
                    <div className="text-sm">info@luonglandscaping.com</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;