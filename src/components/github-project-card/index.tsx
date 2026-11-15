import { Fragment } from 'react';
import { AiOutlineFork, AiOutlineStar, AiOutlineGithub } from 'react-icons/ai';
import { MdInsertLink } from 'react-icons/md';
import { ga, getLanguageColor, skeleton } from '../../utils';
import { GithubProject } from '../../interfaces/github-project';

const GithubProjectCard = ({
  header,
  githubProjects,
  loading,
  limit,
  googleAnalyticsId,
}: {
  header: string;
  githubProjects: GithubProject[];
  loading: boolean;
  limit: number;
  googleAnalyticsId?: string;
}) => {
  if (!loading && githubProjects.length === 0) {
    return;
  }

  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < limit; index++) {
      array.push(
        <div
          className="card card-sm bg-base-200/45 border border-base-300 shadow-none rounded-xl"
          key={index}
        >
          <div className="flex justify-between flex-col p-5 h-full w-full">
            <div>
              <div className="flex items-center">
                <span>
                  <h5 className="card-title text-lg">
                    {skeleton({
                      widthCls: 'w-32',
                      heightCls: 'h-8',
                      className: 'mb-1',
                    })}
                  </h5>
                </span>
              </div>
              <div className="mb-5 mt-1">
                {skeleton({
                  widthCls: 'w-full',
                  heightCls: 'h-4',
                  className: 'mb-2',
                })}
                {skeleton({ widthCls: 'w-full', heightCls: 'h-4' })}
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex grow">
                <span className="mr-3 flex items-center">
                  {skeleton({ widthCls: 'w-12', heightCls: 'h-4' })}
                </span>
                <span className="flex items-center">
                  {skeleton({ widthCls: 'w-12', heightCls: 'h-4' })}
                </span>
              </div>
              <div>
                <span className="flex items-center">
                  {skeleton({ widthCls: 'w-12', heightCls: 'h-4' })}
                </span>
              </div>
            </div>
          </div>
        </div>,
      );
    }

    return array;
  };

  const renderProjects = () => {
    const isSingle = githubProjects.length === 1;
    const isOddTail =
      githubProjects.length > 1 && githubProjects.length % 2 === 1;

    return githubProjects.map((item, index) => (
      <a
        className={`card card-sm bg-base-200/45 hover:bg-base-200/90 border border-base-300 hover:border-base-content/25 shadow-none rounded-xl transition-all duration-200 cursor-pointer ${
          isSingle || (isOddTail && index === githubProjects.length - 1)
            ? 'md:col-span-2'
            : ''
        }`}
        href={item.html_url}
        key={index}
        onClick={(e) => {
          e.preventDefault();

          try {
            if (googleAnalyticsId) {
              ga.event('Click project', { project: item.name });
            }
          } catch (error) {
            console.error(error);
          }

          window?.open(item.html_url, '_blank');
        }}
      >
        <div className="flex justify-between flex-col p-5 h-full w-full">
          <div>
            <div className="flex items-center justify-between gap-2 truncate">
              <div className="card-title text-base font-semibold tracking-tight flex items-center gap-1.5 text-base-content truncate">
                <MdInsertLink className="shrink-0 opacity-60" />
                <span className="truncate">{item.name}</span>
              </div>
              {isSingle && (
                <span className="badge badge-xs bg-base-100 border border-base-300 text-base-content/70 font-mono shrink-0">
                  Flagship
                </span>
              )}
            </div>
            <p className="mb-4 mt-2 text-base-content/75 text-sm leading-relaxed">
              {item.description}
            </p>
            {item.topics && item.topics.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-4">
                {item.topics.slice(0, 4).map((topic) => (
                  <span
                    key={topic}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-base-100 border border-base-300 text-base-content/70"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="flex justify-between text-xs text-base-content/70 truncate pt-2 border-t border-base-300/60">
            <div className="flex grow">
              <span className="mr-3 flex items-center">
                <AiOutlineStar className="mr-1" />
                <span>{item.stargazers_count}</span>
              </span>
              <span className="flex items-center">
                <AiOutlineFork className="mr-1" />
                <span>{item.forks_count}</span>
              </span>
            </div>
            <div>
              {item.language && (
                <span className="flex items-center font-medium">
                  <div
                    className="w-2.5 h-2.5 rounded-full mr-1.5"
                    style={{ backgroundColor: getLanguageColor(item.language) }}
                  />
                  <span>{item.language}</span>
                </span>
              )}
            </div>
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
            {/* Enhanced Header Section */}
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
                    <AiOutlineGithub className="text-xl" />
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-semibold tracking-tight text-base-content truncate">
                    {loading
                      ? skeleton({ widthCls: 'w-48', heightCls: 'h-7' })
                      : header}
                  </h3>
                  <div className="text-base-content/60 text-xs sm:text-sm mt-0.5 truncate">
                    {loading
                      ? skeleton({ widthCls: 'w-32', heightCls: 'h-4' })
                      : `Showcasing ${githubProjects.length} ${githubProjects.length === 1 ? 'repository' : 'repositories'}`}
                  </div>
                </div>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {loading ? renderSkeleton() : renderProjects()}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default GithubProjectCard;
