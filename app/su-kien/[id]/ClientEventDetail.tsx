"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Link2 } from "lucide-react";

interface ClientEventDetailProps {
  event: {
    id: number;
    title: string;
    date: string;
    views: number;
    category: string;
    description: string;
    image: string;
    content: string;
  };
}

export default function ClientEventDetail({ event }: ClientEventDetailProps) {
  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = event.title;
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        alert('Đã sao chép link!');
        break;
    }
  };

  return (
    <div className="flex items-center space-x-3 mb-8 pb-6 border-b">
      <span className="text-gray-600 font-medium">Chia sẻ:</span>
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleShare('facebook')}
        className="flex items-center space-x-2"
      >
        <Facebook className="w-4 h-4" />
        <span>Facebook</span>
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleShare('twitter')}
        className="flex items-center space-x-2"
      >
        <Twitter className="w-4 h-4" />
        <span>Twitter</span>
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleShare('copy')}
        className="flex items-center space-x-2"
      >
        <Link2 className="w-4 h-4" />
        <span>Sao chép</span>
      </Button>
    </div>
  );
}