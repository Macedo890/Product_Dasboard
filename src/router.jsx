import { createBrowserRouter } from "react-router-dom";

import Rootlayout from "./pages/Rootlayout.jsx";
import Home from "./pages/Home.jsx";
import ItemsLayout from "./pages/Layout.jsx";
import ListItems from "./pages/ListItems.jsx";
import CreateItem from "./pages/CreateItem.jsx";
import ShowItem from "./pages/ShowItem.jsx";
import UpdateItem from "./pages/UpdateItem.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "items",
        element: <ItemsLayout />,
        children: [
          {
            index: true,
            element: <ListItems />,
          },

          {
            path: "new",
            element: <CreateItem />,
          },

          {
            path: ":id",
            element: <ShowItem />,
          },
          {
            path: ":id/update",
            element: <UpdateItem />,
          },
        ],
      },
    ],
  },
]);

export default router;

{
  /*          .... 
                           ,;;'''';;,                    ,;;;;, 
                 ,        ;;'      `;;,               .,;;;'   ; 
              ,;;;       ;;          `;;,';;;,.     ,%;;'     ' 
            ,;;,;;       ;;         ,;`;;;, `;::.  %%;' 
           ;;;,;;;       `'       ,;;; ;;,;;, `::,%%;' 
           ;;;,;;;,          .,%%%%%'% ;;;;,;;   %;;; 
 ,%,.      `;;;,;;;,    .,%%%%%%%%%'%; ;;;;;,;;  %;;; 
;,`%%%%%%%%%%`;;,;;'%%%%%%%%%%%%%'%%'  `;;;;;,;, %;;; 
;;;,`%%%%%%%%%%%,; ..`%%%%%%%%;'%%%'    `;;;;,;; %%;; 
 `;;;;;,`%%%%%,;;/, .. `"""'',%%%%%      `;;;;;; %%;;, 
    `;;;;;;;,;;/////,.    ,;%%%%%%%        `;;;;,`%%;; 
           ;;;/%%%%,%///;;;';%%%%%%,          `;;;%%;;, 
          ;;;/%%%,%%%%%/;;;';;'%%%%%,             `%%;; 
         .;;/%%,%%%%%//;;'  ;;;'%%%%%,             %%;;, 
         ;;//%,%%%%//;;;'   `;;;;'%%%%             `%;;; 
         ;;//%,%//;;;;'      `;;;;'%%%              %;;;, 
         `;;//,/;;;'          `;;;'%%'              `%;;; 
           `;;;;'               `;'%'                `;;;; 
                                  '      .,,,.        `;;;; 
                                      ,;;;;;;;;;;,     `;;;; 
                                     ;;;'    ;;;,;;,    `;;;; 
                                     ;;;      ;;;;,;;.   `;;;; 
                                      `;;      ;;;;;,;;   ;;;; 
                                        `'      `;;;;,;;  ;;;; 
                                                   `;;,;, ;;;; 
                                                      ;;, ;;;; 
                                                        ';;;;; 
                                                         ;;;;; 
                                                        .;;;;' 
                                                       .;;;;' 
                                                      ;;;;;' 
                                                     ,;;;;' */
}
