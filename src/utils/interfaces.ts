export interface buttonprops{
    variants:'contained'|'text'|'outlined';
    label:string;
    handleClick:()=>void;

} 
export interface textprops{
    variants:'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'subtitle1';
    text:string;
}
export interface customheaderprops{
    headertitle:string;
    handleAdd:()=>void;
}
export interface dataactionsprops {
    handleGetData: () => void;
    handleUpdateData: () => void;
    handleDeleteData: () => void;
  }

  export interface dataprops {
    id:string;
    title: string;
    author: string;
    genre: string;
    totalCopies: number;
  }
  export interface booksprops {
    title: string;
    author: string;
    genre: string;
    totalCopies: number;
}

export interface bookstoretemplateprops {
  children: React.ReactNode;
}
