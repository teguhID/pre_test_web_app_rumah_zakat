/* eslint-disable @next/next/no-img-element */
import ImageDetailList from '../../components/atoms/ImageDetailList'
import InfoDetailList from '../../components/molecules/InfoDetailList'

interface AdditionalDesc {
  label?: string;
  value: string | number;
}

interface InfoCardProps {
  src: string;
  alt: string;
  title: string;
  additionalTitle: string;
  desc: string;
  additionalDesc: AdditionalDesc[];
  onClickBack?: () => void;
  onClickDetail: string;
}

export default function DetailList({ src, alt, title, additionalTitle, desc, additionalDesc, onClickBack, onClickDetail }: InfoCardProps) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Poster Image */}
        <ImageDetailList
          src={src}
          alt={alt}
        />

        <div>
            {/* Info */}
          <InfoDetailList
            title={title}
            additionalTitle={additionalTitle}
            desc={desc}
            additionalDesc={additionalDesc}
          />

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              onClick={onClickBack}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
            >
              Back
            </button>

            <a
              href={onClickDetail}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              More Detail
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
