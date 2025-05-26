export default function Footer() {
    return (
        <footer id="contact" className="bg-gray-900 text-white min-h-[20vh] py-8 px-4 z-1">
            <div className="max-w-6xl mx-auto grid grid-row lg:grid-cols-3 gap-8 text-center">
                <div>
                    <p className="text-sm">&copy; Will Ferrens 2025<br /><br />All Rights Reserved.</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">Follow Me</h3>
                    <div className="flex justify-center gap-4">
                        <a href="https://github.com/willferrens" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">GitHub</a>
                        <a href="https://linkedin.com/in/willferrens" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LinkedIn</a>
                        <a href="https://leetcode.com/u/wferrens/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LeetCode</a>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">Contact</h3>
                    <p className="text-sm">Personal: willferrens@gmail.com</p>
                    <p className="text-sm">Location: Baltimore, MD, USA</p>
                </div>
            </div>
        </footer>
    );
}
