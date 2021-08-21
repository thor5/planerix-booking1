import { useState, ReactElement, JSXElementConstructor, cloneElement } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

type Props = {
  children: ReactElement
  content: ReactElement<any, string | JSXElementConstructor<any>>
  title?: string
}

/**
 * @summary Диалоговое окно, доносящее до пользователя какую-то информацию(как alert в браузере).
 *
 * @param children - Элемент, нажатие на который спровоцирует появление
 * диалогового окна.
 * @param content - content
 * @param title - Заголовок внутри диалогового окна.
 *
 * @description Это окно предназначено для того, чтобы информировать пользователя о том, что что-то
 * произойдёт после совершенного им действия.
 */
export default function DialogForInfo(props: Props) {
  const { children, title, content } = props

  const [open, setOpen] = useState(false)

  const clone = cloneElement(children, {
    onClick: async () => {
      if (children.props.onClick) {
        await children.props.onClick()
      }
      setOpen(true)
    },
  })

  const cloneContent = cloneElement(content, {
    onClose: () => setOpen(false),
  })

  return (
    <>
      {clone}
      <Dialog fullWidth open={open} onClose={() => setOpen(false)}>
        {title && <DialogTitle>{title}</DialogTitle>}
        {content && <DialogContent>{cloneContent}</DialogContent>}
        <DialogActions>
          <Button
            onClick={() => {
              setOpen(false)
            }}
            size="small"
            variant="contained"
            autoFocus
            color="inherit"
          >
            закрыть
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
