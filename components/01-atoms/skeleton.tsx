interface SkeletonProps {
  width?: number;
  height?: number;
}

export const Skeleton = ({ width = 20, height = 4 }: SkeletonProps) => (
  <>
    <div
      className={`flex animate-pulse items-center space-x-4 py-4 ${
        width && `w-[${width}px]`
      } ${height && `w-[${height}px]`}`}
    >
      <div className="h-12 w-12 flex-shrink-0 rounded-md bg-gray-200"></div>
      <div className="flex items-center space-x-2 text-gray-200">
        <div className="h-3 w-28 rounded-md bg-gray-200"></div>
      </div>
    </div>
  </>
);

export default Skeleton;
