import { useCallback, useState, useEffect } from 'react';
import { FaCloudUploadAlt, FaFilePdf, FaFileWord, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface FileDropZoneProps {
    onFileSelect: (file: File | null) => void;
    acceptedTypes?: string[];
    maxSizeMB?: number;
    label?: string;
    helperText?: string;
    resetTrigger?: number;
}

const FileDropZone = ({
    onFileSelect,
    acceptedTypes = ['.pdf', '.doc', '.docx'],
    maxSizeMB = 5,
    label = "Upload your CV",
    helperText = "PDF, DOC or DOCX (Max 5MB)",
    resetTrigger = 0
}: FileDropZoneProps) => {
    const [isDragging, setIsDragging] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);

    // Reset component when resetTrigger changes
    useEffect(() => {
        if (resetTrigger > 0) {
            setSelectedFile(null);
            setError(null);
        }
    }, [resetTrigger]);

    const validateFile = (file: File): boolean => {
        setError(null);

        // Check file size
        const maxSizeBytes = maxSizeMB * 1024 * 1024;
        if (file.size > maxSizeBytes) {
            setError(`File size exceeds ${maxSizeMB}MB`);
            return false;
        }

        // Check file type
        const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
        if (!acceptedTypes.includes(fileExtension)) {
            setError(`Only ${acceptedTypes.join(', ')} files are allowed`);
            return false;
        }

        return true;
    };

    const handleFile = (file: File) => {
        if (validateFile(file)) {
            setSelectedFile(file);
            onFileSelect(file);
        } else {
            setSelectedFile(null);
            onFileSelect(null);
        }
    };

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    }, []);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);

        const files = e.dataTransfer.files;
        if (files && files[0]) {
            handleFile(files[0]);
        }
    }, []);

    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files[0]) {
            handleFile(files[0]);
        }
    };

    const removeFile = () => {
        setSelectedFile(null);
        setError(null);
        onFileSelect(null);
    };

    const getFileIcon = (fileName: string) => {
        const extension = fileName.split('.').pop()?.toLowerCase();
        if (extension === 'pdf') return <FaFilePdf className="text-red-500" />;
        if (extension === 'doc' || extension === 'docx') return <FaFileWord className="text-blue-500" />;
        return <FaCloudUploadAlt />;
    };

    const formatFileSize = (bytes: number): string => {
        if (bytes < 1024) return bytes + ' B';
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
        return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
    };

    return (
        <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 ml-1">{label}</label>

            <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`relative border-2 border-dashed rounded-xl p-8 transition-all ${
                    isDragging
                        ? 'border-primary bg-primary/10'
                        : error
                        ? 'border-red-500 bg-red-500/5'
                        : 'border-slate-600 bg-slate-900/50 hover:border-primary/50'
                }`}
            >
                <AnimatePresence mode="wait">
                    {selectedFile ? (
                        <motion.div
                            key="file-selected"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="flex items-center justify-between gap-4"
                        >
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                                <div className="text-3xl flex-shrink-0">
                                    {getFileIcon(selectedFile.name)}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-white font-medium truncate">{selectedFile.name}</p>
                                    <p className="text-gray-400 text-sm">{formatFileSize(selectedFile.size)}</p>
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={removeFile}
                                className="flex-shrink-0 text-gray-400 hover:text-red-500 transition-colors p-2"
                            >
                                <FaTimes size={20} />
                            </button>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="file-empty"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="text-center"
                        >
                            <FaCloudUploadAlt
                                className={`mx-auto text-5xl mb-4 transition-colors ${
                                    isDragging ? 'text-primary' : 'text-gray-500'
                                }`}
                            />
                            <p className="text-white mb-2">
                                {isDragging ? 'Drop your file here' : 'Drag & drop your CV here'}
                            </p>
                            <p className="text-gray-400 text-sm mb-4">or</p>
                            <label className="inline-block px-6 py-2 bg-primary text-white rounded-lg cursor-pointer hover:bg-primary/90 transition-colors">
                                Browse files
                                <input
                                    type="file"
                                    accept={acceptedTypes.join(',')}
                                    onChange={handleFileInput}
                                    className="hidden"
                                />
                            </label>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {helperText && !error && (
                <p className="text-sm text-gray-400 ml-1">{helperText}</p>
            )}

            {error && (
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-red-500 ml-1"
                >
                    {error}
                </motion.p>
            )}
        </div>
    );
};

export default FileDropZone;
