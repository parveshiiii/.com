
import { useState, useEffect } from 'react';
import { ExternalLink, Star, GitFork, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { GitHubRepo } from '@/lib/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';

const GitHubProjects = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { toast } = useToast();
  
  // GitHub username
  const username = 'parveshiiii';
  const orgUsername = 'XenArcAI';

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        
        // Fetch user repos
        const userResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
        
        if (!userResponse.ok) {
          throw new Error('Failed to fetch GitHub repositories');
        }
        
        const userData = await userResponse.json();
        
        // Fetch organization repos
        const orgResponse = await fetch(`https://api.github.com/orgs/${orgUsername}/repos?sort=updated&per_page=100`);
        let orgData = [];
        
        if (orgResponse.ok) {
          orgData = await orgResponse.json();
        }
        
        // Combine both sets of repos and take the first 6
        const combinedRepos = [...userData, ...orgData].slice(0, 6);
        setRepos(combinedRepos);
        
        toast({
          title: "GitHub repositories loaded",
          description: `Loaded ${combinedRepos.length} repositories`,
          duration: 3000,
        });
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching repos:', error);
        setError('Failed to load GitHub repositories. Please check the username and try again.');
        setLoading(false);
        
        toast({
          title: "Error loading repositories",
          description: "Failed to load GitHub repositories",
          variant: "destructive",
        });
      }
    };

    fetchRepos();
  }, [username, orgUsername, toast]);

  // Function to determine language color
  const getLanguageColor = (language: string | null) => {
    const colors: { [key: string]: string } = {
      JavaScript: 'bg-yellow-300',
      TypeScript: 'bg-blue-500',
      HTML: 'bg-red-500',
      CSS: 'bg-purple-500',
      Python: 'bg-green-500',
      Java: 'bg-orange-500',
    };

    return language ? colors[language] || 'bg-gray-500' : 'bg-gray-500';
  };

  return (
    <section id="github" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div className="animate-in">
            <h2 className="text-3xl font-bold mb-2">GitHub Projects</h2>
            <p className="text-muted-foreground max-w-2xl">
              My open source work and contributions from personal and organization repositories.
            </p>
          </div>
          
          <div className="flex items-center space-x-4 animate-in" style={{animationDelay: "150ms"}}>
            <a href="https://github.com/XenArcAI" target="_blank" rel="noopener noreferrer" className="group">
              <Avatar className="h-14 w-14 border-2 border-primary transition-all group-hover:scale-105">
                <AvatarImage src="https://avatars.githubusercontent.com/u/XenArcAI" alt="XenArcAI" />
                <AvatarFallback>XA</AvatarFallback>
              </Avatar>
            </a>
            <div>
              <h3 className="font-bold">XenArcAI</h3>
              <p className="text-sm text-muted-foreground">Founder & CEO</p>
            </div>
          </div>
        </div>
        
        {error && (
          <div className="flex items-center p-4 mb-8 bg-destructive/10 border border-destructive/30 rounded-md animate-in">
            <AlertCircle className="h-5 w-5 text-destructive mr-2" />
            <p className="text-destructive">{error}</p>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            // Skeleton loaders
            Array(6).fill(0).map((_, index) => (
              <Card key={index} className="animate-pulse">
                <CardHeader>
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-full mt-2" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4 mt-2" />
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Skeleton className="h-4 w-1/4" />
                  <Skeleton className="h-4 w-1/4" />
                </CardFooter>
              </Card>
            ))
          ) : (
            repos.map((repo, i) => (
              <Card 
                key={repo.id} 
                className="hover-card animate-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg">{repo.name}</CardTitle>
                  <CardDescription>
                    {repo.description || 'No description provided'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {repo.language && (
                    <div className="flex items-center mb-2">
                      <span className={`inline-block w-3 h-3 rounded-full mr-2 ${getLanguageColor(repo.language)}`}></span>
                      <span>{repo.language}</span>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      <span className="text-sm">{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center">
                      <GitFork className="h-4 w-4 mr-1" />
                      <span className="text-sm">{repo.forks_count}</span>
                    </div>
                  </div>
                  <a 
                    href={repo.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-primary hover:underline group"
                  >
                    View <ExternalLink className="h-3 w-3 ml-1 transition-transform group-hover:translate-x-1" />
                  </a>
                </CardFooter>
              </Card>
            ))
          )}
        </div>
        
        <div className="mt-12 text-center animate-in" style={{animationDelay: "300ms"}}>
          <a 
            href={`https://github.com/${username}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary font-medium hover:underline mr-6 group"
          >
            My GitHub Profile <ExternalLink className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a 
            href={`https://github.com/${orgUsername}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary font-medium hover:underline group"
          >
            XenArcAI Organization <ExternalLink className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default GitHubProjects;
