using System;
using System.Linq;

namespace LinqAssignment
{
    class Program
    {
        static void Main(string[] args)
        {
            string str = "BTS (Korean: 방탄소년단; RR: Bangtan Sonyeondan), also" +
                " known as the Bangtan Boys, is a seven-member South Korean boy band that began" +
                " formation in 2010 and debuted in 2013 under Big Hit Entertainment.[4] The septet—composed of " +
                "Jin, Suga, J-Hope, RM, Jimin, V, and Jungkook—co-writes and co-produces much of BTS output." +
                " Originally a hip hop group, their musical style has evolved to include a wide range of genres. " +
                "BTS lyrics, often focused on personal and social commentary, touch on the themes of mental health, " +
                "troubles of school-age youth, loss, the journey towards loving oneself, and individualism. BTS work " +
                "features references to literature and psychological concepts and includes an alternative universe storyline. " +
                "BTS has released several albums and performed on several world tours.";

            var words = str.Split(" ");

            var w = "BTS";

            var cnt = words.Where(x => x == w).ToList().Count();
            Console.WriteLine(cnt);

            //var cnt = (from c in words where c == w select c).ToList();
            //int count = cnt.Count();
            //Console.WriteLine(count);


        }
    }
}
