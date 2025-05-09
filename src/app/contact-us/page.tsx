function ContactPage() {
    return (
        <section className="bg-black mt-10 text-white py-20 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div className="space-y-8">
                    <h2 className="text-3xl sm:text-4xl font-bold">Let's Connect</h2>
                    <p className="text-gray-400 text-base leading-relaxed">
                        Whether you have a project idea, job opportunity, or just want to say hi, feel free to reach out. I’m always open to discussing new work, creative ideas, or opportunities.
                    </p>
                    <div className="space-y-4 text-sm text-gray-300">
                        <p><span className="text-white font-semibold">Name:</span> Sanjay Choudhary</p>
                        <p><span className="text-white font-semibold">Email:</span> johndoe@example.com</p>
                        <p><span className="text-white font-semibold">Phone:</span>6376024125, 9376893981</p>
                        <p><span className="text-white font-semibold">Location:</span> Jaipur, Rajasthan</p>
                    </div>
                </div>

                <form className="bg-white/5 border border-white/10 backdrop-blur-sm p-8 rounded-xl shadow-md space-y-6 w-full">
                    <div>
                        <label className="block text-sm font-semibold mb-1">Name</label>
                        <input
                            type="text"
                            className="w-full px-4 py-3 bg-white/10 text-white border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Your full name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-3 bg-white/10 text-white border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="your@email.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold mb-1">Message</label>
                        <textarea

                            className="w-full px-4 py-3 bg-white/10 text-white border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Type your message..."
                        ></textarea>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full sm:w-fit px-6 py-3 bg-white rounded-lg text-black font-semibold shadow-md transition duration-300"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default ContactPage
