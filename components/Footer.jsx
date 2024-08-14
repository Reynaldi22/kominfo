import { Icon } from '@iconify/react';
import instagramIcon from '@iconify-icons/mdi/instagram';
import youtubeIcon from '@iconify-icons/mdi/youtube';
import facebookIcon from '@iconify-icons/mdi/facebook';
import twitterIcon from '@iconify-icons/mdi/twitter';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full text-white py-4" style={{ backgroundColor: 'rgb(94, 7, 7)' }}>
      <div className="container mx-auto text-center">
        <h2 className="text-lg font-bold">Statistik Pengunjung</h2>
        <div className="flex justify-center items-center mt-2 space-x-4">
          <div className="flex items-center space-x-1">
            <span>Pengunjung hari ini: 20</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>Pengunjung Online: 2</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>Total Pengunjung: 60</span>
          </div>
        </div>

        <div className="flex justify-center mt-2 space-x-2">
          <p>@ 2021-2024 | Command Center Pemprov SULUT</p>
          <Link href="https://www.instagram.com/pelsis_official?igsh=dG5udHZqaHJtOTJ3" legacyBehavior>
            <a className="text-white hover:text-gray-300">
              <Icon icon={instagramIcon} className="h-6 w-6" />
            </a>
          </Link>
          
          <Link href="https://www.youtube.com/@pelsisjtesulut" legacyBehavior>
            <a className="text-white hover:text-gray-300">
              <Icon icon={youtubeIcon} className="h-6 w-6" />
            </a>
          </Link>

          <Link href="https://www.instagram.com/pelsis_official?igsh=dG5udHZqaHJtOTJ3" legacyBehavior>
            <a className="text-white hover:text-gray-300">
              <Icon icon={facebookIcon} className="h-6 w-6" />
            </a>
          </Link>
          <Link href="https://www.instagram.com/pelsis_official?igsh=dG5udHZqaHJtOTJ3" legacyBehavior>
            <a className="text-white hover:text-gray-300">
              <Icon icon={twitterIcon} className="h-6 w-6" />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
