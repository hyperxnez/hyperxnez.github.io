import { Fragment } from 'react';
import LazyImage from '../lazy-image';
import { MdOpenInNew } from 'react-icons/md';
import { ga, skeleton } from '../../utils';
import { SanitizedExternalProject } from '../../interfaces/sanitized-config';

const ExternalProjectCard = ({
  externalProjects,
  header,
  loading,
  googleAnalyticId,
}: {
  externalProjects: SanitizedExternalProject[];
  header: string;
  loading: boolean;
  googleAnalyticId?: string;
}) => {
  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < externalProjects.length; index++) {
      array.push(
        <div
          className="card card-sm bg-base-200/45 border border-base-300 shadow-none rounded-xl"
          key={index}
        >
          <div className="p-5 h-full w-full">
            <div className="flex flex-col w-full">
              {skeleton({
                widthCls: 'w-40',
                heightCls: 'h-6',
                className: 'mb-3',
              })}
              {skeleton({
                widthCls: 'w-full',
                heightCls: 'h-4',
                className: 'mb-2',
              })}
              {skeleton({
                widthCls: 'w-4/5',
                heightCls: 'h-4',
              })}
            </div>
          </div>
        </div>,
      );
    }

    return array;
  };

  const renderExternalProjects = () => {
    const isOddTail =
      externalProjects.length > 1 && externalProjects.length % 2 === 1;

    return externalProjects.map((item, index) => (
      <a
        className={`card card-sm bg-base-200/45 hover:bg-base-200/90 border border-base-300 hover:border-base-content/25 shadow-none rounded-xl transition-all duration-200 cursor-pointer ${
          isOddTail && index === externalProjects.length - 1
            ? 'md:col-span-2'
            : ''
        }`}
        key={index}
        href={item.link}
        onClick={(e) => {
          e.preventDefault();

          try {
            if (googleAnalyticId) {
              ga.event('Click External Project', {
                post: item.title,
              });
            }
          } catch (error) {
            console.error(error);
          }

          window?.open(item.link, '_blank');
        }}
      >
        <div className="p-5 h-full w-full flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between gap-2 mb-2">
              <h2 className="font-semibold text-base tracking-tight text-base-content text-left">
                {item.title}
              </h2>
              <MdOpenInNew className="shrink-0 mt-1 opacity-40 text-sm" />
            </div>
            {item.imageUrl && (
              <div className="avatar opacity-90 mb-3">
                <div className="w-16 h-16 mask mask-squircle">
                  <LazyImage
                    src={item.imageUrl}
                    alt={'thumbnail'}
                    placeholder={skeleton({
                      widthCls: 'w-full',
                      heightCls: 'h-full',
                      shape: '',
                    })}
                  />
                </div>
              </div>
            )}
            <p className="text-base-content/75 text-sm leading-relaxed text-left">
              {item.description}
            </p>
          </div>
        </div>
      </a>
    ));
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="card bg-base-100 border border-base-300 shadow-none rounded-2xl">
          <div className="card-body p-6 lg:p-7">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
              <div className="flex items-center space-x-3">
                {loading ? (
                  skeleton({
                    widthCls: 'w-11',
                    heightCls: 'h-11',
                    className: 'rounded-xl',
                  })
                ) : (
                  <div className="flex items-center justify-center w-11 h-11 bg-base-200 border border-base-300 rounded-xl">
                    <MdOpenInNew className="text-xl" />
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-semibold tracking-tight text-base-content truncate">
                    {loading
                      ? skeleton({ widthCls: 'w-40', heightCls: 'h-7' })
                      : header}
                  </h3>
                  <div className="text-base-content/60 text-xs sm:text-sm mt-0.5 truncate">
                    {loading
                      ? skeleton({ widthCls: 'w-32', heightCls: 'h-4' })
                      : `Showcasing ${externalProjects.length} ${externalProjects.length === 1 ? 'architecture case study' : 'architecture case studies'}`}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {loading ? renderSkeleton() : renderExternalProjects()}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ExternalProjectCard;
