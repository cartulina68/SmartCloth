import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { X } from 'lucide-react';

interface ImageUploaderProps {
    files: File[];
    onChange: (files: File[]) => void;
}

export function ImageUploader({ files, onChange }: ImageUploaderProps) {
    const [dragActive, setDragActive] = useState(false);

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFiles(Array.from(e.dataTransfer.files));
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            handleFiles(Array.from(e.target.files));
        }
    };

    const handleFiles = (newFiles: File[]) => {
        // Filter only image files
        const imageFiles = newFiles.filter((file) =>
            file.type.startsWith('image/')
        );
        onChange([...files, ...imageFiles]);
    };

    const removeFile = (index: number) => {
        const newFiles = [...files];
        newFiles.splice(index, 1);
        onChange(newFiles);
    };

    return (
        <div className="space-y-4">
            <div
                className={`border-2 border-dashed rounded-lg p-4 text-center ${
                    dragActive
                        ? 'border-primary bg-primary/10'
                        : 'border-gray-300'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
            >
                <Input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleChange}
                    className="hidden"
                    id="file-upload"
                />
                <label
                    htmlFor="file-upload"
                    className="cursor-pointer text-sm text-gray-600"
                >
                    <span className="font-medium text-primary">
                        Haz clic para subir
                    </span>{' '}
                    o arrastra y suelta
                    <br />
                    PNG, JPG, GIF hasta 10MB
                </label>
            </div>

            {files.length > 0 && (
                <div className="grid grid-cols-4 gap-4">
                    {files.map((file, index) => (
                        <div
                            key={index}
                            className="relative group aspect-square rounded-lg overflow-hidden"
                        >
                            <img
                                src={URL.createObjectURL(file)}
                                alt={`Preview ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                            <Button
                                type="button"
                                variant="destructive"
                                size="icon"
                                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                                onClick={() => removeFile(index)}
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
