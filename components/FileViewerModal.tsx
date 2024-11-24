"use client"

import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle } from './ui/alert-dialog'
import { Models } from 'node-appwrite'

const FileViewerModal = ({ file }: { file: Models.Document }) => {
  return (
    <AlertDialog>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle></AlertDialogTitle>
        </AlertDialogHeader>


      </AlertDialogContent>
    </AlertDialog>
  )
}

export default FileViewerModal