using System;
using System.Collections.Generic;
using System.Text;

namespace CallBack
{
    public class Manager
    {
        public delegate bool sendMessageDelegate (Message m);
        private Agent.taskSendDelegate td;
        Agent a;

        public Manager()
        {
            a = new Agent();
        }
        public void Requestdelevery(Message  md , sendMessageDelegate t)
        {
            td = new Agent.taskSendDelegate(t);
            a.doTask(td, md);
            a.notificationChanged += new Agent.NotificationHandler((o, e)
                =>
            {
                Console.WriteLine(e.status);
            });
        }

    }
}
