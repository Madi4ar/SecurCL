import FileList from '@/components/FileList';
export default function Files() {
  return (
    <>
      <div className="p-5 ml-3 mr-3 bg-white rounded-xl mt-5">
        <h1 className="text-xl font-bold uppercase">Last Uploaded Files</h1>
        <FileList />
      </div>
    </>
  );
}
