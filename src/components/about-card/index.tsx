import { SanitizedAbout } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';

interface AboutCardProps {
  loading: boolean;
  about: SanitizedAbout;
}

/**
 * Renders the Bento Overview & Objective card at the top of the main column.
 */
const AboutCard = ({ loading, about }: AboutCardProps) => {
  const hasSummary = Boolean(about.summary);
  const hasObjective = Boolean(about.objective);

  if (!hasSummary && !hasObjective) {
    return null;
  }

  const renderTileSkeleton = (colSpanCls: string) => (
    <div
      className={`card card-sm bg-base-200/45 border border-base-300 shadow-none rounded-xl ${colSpanCls}`}
    >
      <div className="p-5">
        {skeleton({ widthCls: 'w-28', heightCls: 'h-4', className: 'mb-3' })}
        {skeleton({ widthCls: 'w-full', heightCls: 'h-4', className: 'mb-2' })}
        {skeleton({ widthCls: 'w-11/12', heightCls: 'h-4', className: 'mb-2' })}
        {skeleton({ widthCls: 'w-3/4', heightCls: 'h-4' })}
      </div>
    </div>
  );

  const summarySpan = hasObjective ? 'md:col-span-3' : 'md:col-span-5';
  const objectiveSpan = hasSummary ? 'md:col-span-2' : 'md:col-span-5';

  return (
    <div className="col-span-1 lg:col-span-2">
      <div className="card bg-base-100 border border-base-300 shadow-none rounded-2xl">
        <div className="card-body p-5 lg:p-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {loading ? (
              <>
                {hasSummary && renderTileSkeleton(summarySpan)}
                {hasObjective && renderTileSkeleton(objectiveSpan)}
              </>
            ) : (
              <>
                {hasSummary && (
                  <div
                    className={`card card-sm bg-base-200/45 border border-base-300 shadow-none rounded-xl ${summarySpan}`}
                  >
                    <div className="p-5">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-base-content/55">
                        01 / Overview
                      </span>
                      <p className="mt-2 text-sm text-base-content/85 leading-relaxed">
                        {about.summary}
                      </p>
                    </div>
                  </div>
                )}
                {hasObjective && (
                  <div
                    className={`card card-sm bg-base-200/45 border border-base-300 shadow-none rounded-xl ${objectiveSpan}`}
                  >
                    <div className="p-5">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-base-content/55">
                        02 / Objective
                      </span>
                      <p className="mt-2 text-sm text-base-content/85 leading-relaxed">
                        {about.objective}
                      </p>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
