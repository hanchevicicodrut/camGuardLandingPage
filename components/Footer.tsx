export default function Footer() {
    return (
        <footer className="px-6 py-12 bg-gray-900 text-gray-400">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-sm">
                    © {new Date().getFullYear()} CamGuard. All rights reserved.
                </p>

                <div className="flex gap-6 text-sm">
                    <a href="#" className="hover:text-white">
                        Privacy Policy
                    </a>
                    <a href="#" className="hover:text-white">
                        Terms of Service
                    </a>
                    <a href="mailto:contact@camguard.app" className="hover:text-white">
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    );
}
