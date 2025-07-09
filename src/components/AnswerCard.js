import React from "react";
import { FiBookOpen, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function AnswerCard({ answer, citations }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white/70 backdrop-blur-md border border-gray-100 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-6 sm:p-8 my-6 max-w-3xl mx-auto hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-all duration-500"
        >

            <div className="flex items-center gap-3 mb-4">
                <div className="bg-indigo-100 text-indigo-600 p-2 rounded-full shadow-inner">
                    <FiBookOpen className="text-xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Answer</h2>
            </div>


            <p className="text-gray-700 text-base leading-relaxed mb-6 transition-all duration-300">
                {answer}
            </p>


            {citations.length > 0 && (
                <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">📚 Citations</h3>
                    <ul className="space-y-2">
                        {citations.map((citation, index) => (
                            <motion.li
                                key={index}
                                whileHover={{ scale: 1.03, x: 4 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <a
                                    href={citation.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-blue-600 hover:text-indigo-600 transition-all duration-300"
                                >
                                    <FiExternalLink className="text-base" />
                                    <span className="underline underline-offset-2">{citation.text}</span>
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            )}
        </motion.div>
    );
}

export default AnswerCard;
